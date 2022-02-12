<?php
/* Entête obligatoirement présente dans tous vos webservices */
ini_set('session.use_cookies', 0);
ini_set('session.use_only_cookies', 0);
ini_set('session.use_trans_sid', 1);
// Attention au session_name
session_name('sess');
session_start();

header('Content-Type: text/html; charset=utf-8');
header('Content-type: application/json; charset=utf-8');
header('access-control-allow-origin: *');
/* Fin de l'entête obligatoire */


//// CONNEXION A LA BASE DE DONNEES
require_once 'database.class.php';
$dbh = Database::connect();
if (!$dbh) {
    $msg = array('error' => 'Connexion au serveur impossible');
    echo json_encode($msg);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // axios / PHP | Ref.: https://stackoverflow.com/q/43793176
    $data = json_decode(file_get_contents("php://input"), true);

    $questionId = filter_var($data['questionId'], FILTER_SANITIZE_SPECIAL_CHARS);
    if (array_key_exists('answer', $data)) {
      if (is_array($data['answer'])) {
        $answer = filter_var_array($data['answer'], FILTER_SANITIZE_SPECIAL_CHARS);
        $answer = implode(',', $answer);  // converts to text for DB
      } else {
        $answer = filter_var($data['answer'], FILTER_SANITIZE_SPECIAL_CHARS);
      }
    } else {
      $answer = null;
    }

    $query = "INSERT INTO answers (session, questionId, answer)
                VALUES (?, ?, ?);";
    $sth = $dbh->prepare($query);
    $sth->execute(array(session_id(), $questionId, $answer));

    if ($sth->rowCount() > 0) { // on a bien inséré la réponse
        $result = array(
            'success' => 'Enregistrement reussi !',
            'session_id' => session_id(),
        );
    } else {
        $result = array('error' => "Impossible d'enregistrer votre réponse");
    }
} else {
  $result = array('error' => "Méthode inconnue");
}
echo json_encode($result);
