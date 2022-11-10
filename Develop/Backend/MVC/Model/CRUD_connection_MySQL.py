import mysql.connector

DataBase = "Cabaniapp"
host = "localhost"
port = 8080
user = "root"
password = "1234"

class  Connect():
    def __init__(self) -> None:
        try:
            self.connection = mysql.connector.connect(
                host = f"{host}",
                port = f"{port} ",
                user = f"{user}",
                password = f"{password} ",
                db = f"{DataBase}"
            )
        except mysql.connector.Error as e:
            print(f"la base de datos no pudo ser cargada\n {e}")
    
    #INSER
    def inserValue(self, table, valueData1, ValueData2):     
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = f"INSER INTO {table} VALUES ({valueData1}, {ValueData2} )"
                cursor.execute(sentenciaSQL)
                self.connection.commit()
                self.connection.close()
            except Exception as e:
                print(f"No es posible operar el comando INSERT en la DB: {DataBase}")
    
    #SELECT
    def selectValue(self, table):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = f"SELECT * FROM {table} WHERE" #hay que ver las tablas y determinar el Where
                cursor.execute(sentenciaSQL)
                resultadoSELECT = cursor.fetchall()
                self.connection.close()
                return resultadoSELECT
            except Exception as e:
                print(f"No es posible operar el comando SELECT en la DB: {DataBase}\n {e}")
    
    #UPDATE
    def updateValue(self, table, valueToSet, newValue, id):     
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = f"UPDATE {table} SET {valueToSet} AS {newValue} WHERE ID = {id}"
                cursor.execute(sentenciaSQL)
                self.connection.commit()
                self.connection.close()
            except Exception as e:
                print(f"No es posible operar el comando UPDATE en la DB: {DataBase}\n {e}")
    #DELETE
    def deleteValue(self, table, value1):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = f"DELETE FROM {table} WHERE id = {value1} "
                cursor.execute(sentenciaSQL)
                self.connection.commit()
                self.connection.close()

            except Exception as e:
                print(f"No es posible operar el comando DELETE en la DB: {DataBase}\n {e}")
    
    #JOIN
    def joinValue(self, table1, table2):
        if self.connection.is_connected():
            try:
                cursor = self.connection.cursor()
                sentenciaSQL = f"SELECT FROM {table1}, {table2} WHERE {table1}.id = {table2}.id"
                cursor.execute(sentenciaSQL)
                resultadoJOIN = cursor.fetchall()
                self.connection.commit()
                self.connection.close()
                return resultadoJOIN
            except Exception as e:
                print(f"No es posible operar el comando JOIN en la DB: {DataBase}\n {e}")
