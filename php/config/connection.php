<?php

    class Connection
    {
        private $connection, $statement;

        function __construct($dns,$username,$password,$options)
        {
            try {
                $this->connection = new PDO($dns, $username, $password, $options);
            } catch(PDOException $e)
            {
                echo "Error in connecting to database: " .$e->getMessage();
                exit();
            }
        }

        protected function prepareQuery($sql)
        {
            $this->statement = $this->connection->prepare($sql);
        }

        protected function bindValueToStatement($param, $value, $type = null)
        {
            if(is_null($type))
            {
                switch(true)
                {
                    case is_int($value):
                        $type = PDO::PARAM_INT;
                    break;
                    
                    case is_bool($value):
                        $type = PDO::PARAM_BOOL;
                    break;

                    case is_null($value):
                        $type = PDO::PARAM_NULL;
                    break;

                    default:
                        $type = PDO::PARAM_STR;
                }
            }

            $this->statement->bindValue($param, $value, $type);
        }

        protected function executeStatement()
        {
            try{
                return $this->statement->execute();
            } catch (PDOException $e)
            {
                echo "Error in executing statement: " .$e->getMessage();
                exit();
            }
        }

        protected function getSingleRow()
        {
            return $this->statement->fetch();
        }

        protected function getAllRows()
        {
            return $this->statement->fetchAll();
        }

        protected function getAffectedRowCount()
        {
            return $this->statement->rowCount();
        }
    }
?>