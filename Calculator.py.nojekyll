import math

# Defining Global Constants
global g; g = 9.8
global y; y = 1.22
global R; R = {'H': 530, 'M': 400, 'R': 420}
global Rbar; Rbar = 8314.32
global M; M = {'H': 15.7, 'M': 20.7, 'R': 19.8}
global Tt; Tt = 3650
global pi; pi = math.pi
global ps; ps = 101325
global cp; cp = 1004.7
global Ts; Ts = 288.15
global Ma; Ma = 28.96
global Lb; Lb = -.0065

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

def At(Me, r):
    term1 = -((y+1)/(2*(y-1)))
    term2 = ((y+1)/2)**term1
    term3 = (y+1)/(2*(y-1))
    term4 = (1+((y-1)/2)*(Me**2))**term3
    term5 = term4/Me
    return Ae(r)/(term2*term5)

def Pa(h):
    term1 = (-g*Ma)/(Rbar*Lb)
    term2 = (1 + (Lb/Ts)*h)**term1
    return term2*ps

def EnginePerformance(fuel, exitPressure, chamberPressure, nozzleDiameter, altitude):
    exitVelocity = Ve(exitPressure, chamberPressure, fuel)
    exitTemp = Te(exitPressure, chamberPressure)
    exitMach = Me(exitVelocity, exitTemp, fuel)
    throatArea = At(exitMach, nozzleDiameter/2)
    massFlow = mdot(throatArea, chamberPressure, fuel)
    exitArea = Ae(nozzleDiameter/2)
    airPressure = Pa(altitude)
    thrust = F(massFlow, exitVelocity, exitArea, exitPressure, airPressure)
    efficiency = Isp(thrust, massFlow)

    metrics = {'Isp': round(efficiency), 'Thrust': round(thrust), 'Expansion Ratio': round(exitArea/throatArea), 'Exit Velocity': round(exitVelocity), 'Exit Temp': round(exitTemp)}
    return metrics
