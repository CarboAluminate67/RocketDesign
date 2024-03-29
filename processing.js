// Defining Global Constants
let g = 9.8;
let y = 1.22;
// Gas Constants H, M, R
R = [704, 424, 385];
let Rbar = 8314.32;
//Molar Mass H, M, R
let M = [11.8, 19.6, 21.6];
let Tt = 3650;
let pi = Math.PI;
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

    return [Math.round(efficiency), Math.round(thrust), Math.round(exitVelocity), Math.round(exitTemp)]
}


function DisplayEngine() {
    var cycle = document.getElementById('cycleSelect').value;
    var fuel = document.getElementById('fuelSelect').value;
    var exitP = (document.getElementById('exitP').value)*1000;
    var chamberP = (document.getElementById('chamberP').value)*1000;
    var nozzleD = (document.getElementById('nozzleD').value)/100;
    var expansion = document.getElementById('expansion').value;
    var altitude = (document.getElementById('altitude').value)*1000;

    metrics = EnginePerformance(fuel, exitP, chamberP, nozzleD, expansion, altitude)
    const isp = metrics[0];
    const thrust = metrics[1];
    const vel = metrics[2];
    const temp = metrics[3];

    document.getElementById('performance').innerHTML = `
    <p id="ispVal">Isp: ${isp}</p> <canvas id="ispBar" width="500" height="18"></canvas>
    <p id="thrustVal">Thrust: ${thrust}</p> <canvas id="thrustBar" width="500" height="18"></canvas>
    <p id="velVal">Exit Velocity: ${vel}</p> <canvas id="velBar" width="500" height="18"></canvas>
    <p id="tempVal">Exit Temperature: ${temp}</p> <canvas id="tempBar" width="500" height="18"></canvas>`;
    
    DisplayBar(isp, "ispBar")
    DisplayBar(thrust, "thrustBar")
    DisplayBar(vel, "velBar")
    DisplayBar(temp, "tempBar")
}

function Normalize(num) 
{
    return (num-100)/(400)*100
}

function DisplayBar(val, can)
{
    const canvas = document.getElementById(can);
    const context = canvas.getContext("2d")
    Norm = Normalize(val)
    context.fillRect(0, 0, Norm, 18)
}
