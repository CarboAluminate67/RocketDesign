// Defining Global Constants
let g = 9.8;
let y = 1.22;
R = {
    'H': 530, 
    'M': 400, 
    'R': 420
};
let Rbar = 8314.32;
M = {
    'H': 15.7, 
    'M': 20.7, 
    'R': 19.8
};
let Tt = 3650;
let pi = Math.pi;
let ps = 101325;
let cp = 1004.7;
let Ts = 288.15;
let Ma = 28.96;
let Lb = -.0065;

function Isp(F, mdot){
    return F/(mdot*g);
}

function F(mdot, Ve, Ae, pe, p0){
    return mdot*Ve+ Ae*(pe-p0);
}

function mdot(At, pt, fuel){
    var term1 = (At*pt)/Math.sqrt(Tt);
    var term2 = Math.sqrt(y/R[fuel]);
    var term3 = -((y+1)/(2*(y-1)));
    var term4 = ((y+1)/2)**term3;
    return term1*term2*term4;
}

function Ve(pe, pt, fuel){
    var term1 = (Tt*Rbar)/M[fuel];
    var term2 = (2*y)/(y-1);
    var term3 = (y-1)/y;
    var term4 = (1-(pe/pt)**term3);
    return Math.sqrt(term1*term2*term4) ;
}

function Te(pe, pt){
    return Tt*((pe/pt)**((y-1)/y));
}

function Ae(r){
    return pi*r**2;
}

function Me(Ve, Te, fuel){
    return Ve/Math.sqrt(y*R[fuel]*Te);
}

function At(r, Ax){
    return Ae(r)/Ax;
}

function Pa(h){
    var term1 = (-g*Ma)/(Rbar*Lb);
    var term2 = (1 + (Lb/Ts)*h)**term1;
    return term2*ps;
}

function EnginePerformance(fuel, exitPressure, chamberPressure, nozzleDiameter, expansion, altitude){
    var exitVelocity = Ve(exitPressure, chamberPressure, fuel);
    var exitTemp = Te(exitPressure, chamberPressure);
    var throatArea = At(nozzleDiameter/2, expansion);
    var massFlow = mdot(throatArea, chamberPressure, fuel);
    var exitArea = Ae(nozzleDiameter/2);
    var airPressure = Pa(altitude);
    var thrust = F(massFlow, exitVelocity, exitArea, exitPressure, airPressure);
    var efficiency = Isp(thrust, massFlow);

    metrics = {'Isp': Math.round(efficiency), 'Thrust': Math.round(thrust), 'Exit Velocity': Math.round(exitVelocity), 'Exit Temp': Math.round(exitTemp)};
    return metrics;
}

console.log(EnginePerformance('H', 37000, 20640000, 2.3, 69, 0));