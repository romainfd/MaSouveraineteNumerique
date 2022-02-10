<?php
class Database
{

    /**
     * Function connect
     *
     * Connexion a la base locale
     *
     * @return boolean|array false si erreur, connexion a la base sinon
     * if($dbh) permet de tester si la connexion a fonctionné
     */
    public static function connect()
    {
        // données de la base de données A CHANGER !!
        $dbName = 'time';
        $dbServer = 'localhost';
        $dbUser = 'root';
        $dbPasswd = '';
        $dsn = 'mysql:host='.$dbServer.';dbname='.$dbName;

        // on récupère la base de données
        $dbh = null;
        try {
            $dbh = new PDO($dsn, $dbUser, $dbPasswd, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            //$message = 'Echec connexion à la base : '.$e->getMessage();
            return false;
        }
        return $dbh;
    }
}
