import math

# Defining Global Constants
global g; g = 9.8
global y; y = 1.22
global R; R = {'H': 705, 'M': 424, 'R': 385}
global Rbar; Rbar = 8314
global M; M = {'H': 11.8, 'M': 19.6, 'R': 21.6}
global Tt; Tt = 3550
global pi; pi = math.pi

def Isp(F, mdot):
    return F/(mdot*g)

def F(mdot, V, A, pe, p0):
    return mdot*V + A*(pe-p0)

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

print(Te(37000, 20640000))