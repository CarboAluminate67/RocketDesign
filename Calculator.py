import math

# Defining Global Constants
global g; g = 9.8
global y; y = 1.22
global R; R = {'H': 530, 'M': 400, 'R': 420}
global Rbar; Rbar = 8314
global M; M = {'H': 15.7, 'M': 20.7, 'R': 19.8}
global Tt; Tt = 3650
global pi; pi = math.pi

def Isp(F, mdot):
    return F/(mdot*g)

def F(mdot, Ve, Ae, pe, p0):
    return mdot*Ve+ Ae*(pe-p0)

def mdot(At, pt, fuel):
    term1 = (At*pt)/math.sqrt(Tt)
    term2 = math.sqrt(y/R[fuel])
    term3 = -((y+1)/(2*(y-1)))
    term4 = ((y+1)/2)**term3
    return term1*term2*term4

def Ve(pe, pt, fuel):
    term1 = (Tt*Rbar)/M[fuel]
    term2 = (2*y)/(y-1)
    term3 = (y-1)/y 
    term4 = (1-(pe/pt)**term3)  
    return math.sqrt(term1*term2*term4) 

def Te(pe, pt):
    return Tt*((pe/pt)**((y-1)/y))

def Ae(r):
    return pi*r**2

def Me(Ve, Te, fuel):
    return Ve/math.sqrt(y*R[fuel]*Te)

def Ar(Me):
    term1 = -((y+1)/(2*(y-1)))
    term2 = ((y+1)/2)**term1
    term3 = (y+1)/(2*(y-1))
    term4 = (1+((y-1)/2)*(Me**2))**term3
    term5 = term4/Me
    return (term2*term5)

print(mdot(.042, 9700000, 'R')) #236
print(Ve(71000, 9700000, 'R')) #3350
print(Te(71000, 9700000))
print(Me(3280, 1500, 'R')) # 3.7
print(Ar(3.7)) #16
print(F(214, 3280, .9, 71000, 101000))
print(Isp(674920, 214))