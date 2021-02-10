import random
i = 0
def convertirAString(numero):
    print("Numero limite: "+str(numero))
    for i in range(0,numero+1):
        salida =""
        if not i%3: salida+= "Plic"
        if not i%5: salida+= "Plac"
        if not i%7: salida+= "Ploc"
        if not salida: salida=str(i)
        print(salida)
valor = int(random.random() * 1001)
convertirAString(valor)