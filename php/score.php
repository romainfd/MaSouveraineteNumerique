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

    $namedScores = filter_var_array($data['namedScores'], FILTER_SANITIZE_SPECIAL_CHARS);
    foreach ($namedScores as $name => $score) {
        $query = "INSERT INTO scores (session, name, value)
                  VALUES (?, ?, ?);";
        $sth = $dbh->prepare($query);
        $sth->execute(array(session_id(), $name, $score));

        if ($sth->rowCount() === 0) { // Problème d'insertion
            echo json_encode(array(
                'error' => "Échec lors de l'enregistrement du score '$name' !"
            ));
            exit();
        }
    }
    $result = array(
      'success' => 'Enregistrements reussis !',
      'session_id' => session_id(),
    );
} else {
    $result = array('error' => "Méthode inconnue");
}
echo json_encode($result);
