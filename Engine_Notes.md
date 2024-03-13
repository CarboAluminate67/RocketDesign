# Engine Parameter Equations
### Calculate I<sub>sp</sub>

$I_{sp} = {F \over \dot{m}g_0}$

where    
$F$ = Engine Thrust   
$\dot{m}$ = Mass Flow Rate    
$g_0$ = Gravitational Acceleration Constant

### Calculate $F$

$F = \dot{m}V_e + A_e(p_e - p_0)$

where   
$\dot{m}$ = Mass Flow Rate      
$V_e$ = Exit Velocity ($m/s$)   
$A_e$ = Nozzle Exit Area ($m^2$)   
$P_e$ = Exit Pressure (kPa)   
$P_0$ = Free Stream (ambient air) Pressure (kPa)   

### Calculate $\dot{m}$

$\dot{m} = {A^*p_t \over \sqrt{T_t}}\sqrt{\gamma \over R}({\gamma + 1 \over {2}})^{-{\gamma + 1 \over 2(\gamma-1)}}$

where   
$A^*$ = Throat Area ($m^2$)  
$p_t$ = Combustion Chamber Pressure (kPa)   
$T_t$ = Combustion Chamber Temperature (K)    
$\gamma$ = Ratio of Specific Heats  
$R$ = Gas Constant   

### Calculate $V_e$

$V_e = \sqrt{{T_t\bar{R}\over{M_w}} {2\gamma\over{\gamma-1}}[1-({p_e\over{p_t}})^{{\gamma-1\over{\gamma}}}]}$

where    
$T_t$ = Combustion Chamber Temperature (K)   
$\bar{R}$ = Universal Gas Constant   
$M_w$ = Average Molecular Mass of Gas (g/mol)   
$\gamma$ = Ratio of Specific Heats   
$p_e$ = Exit Pressure (kPa)   
$p_t$ = Combustion Chamber Pressure (kPa)   

### Calculate $T_e$   

$T_e = T_t({p_e\over{p_t}})^{\gamma - 1 \over{\gamma}}$

where   
$T_t$ = Combustion Chamber Temperature (K)   
$p_e$ = Exit Pressure (kPa)   
$p_t$ = Combustion Chamber Pressure (kPa)   
$\gamma$ = Ratio of Specific Heats   

### Calculate $A_e$

$A_e = {\pi{}r^2}$

where   
$r$ = 1/2 Max Nozzle Diameter    

### Calculate $A^*$

$A^* = {A_e\over{({\gamma + 1\over{2}})^{-{\gamma+1\over{2({\gamma-1})}}}{({1+{\gamma-1\over2}M_e^2})^{\gamma+1\over{2({\gamma-1})}}\over{M_e}}}}$

where   
$A_e$ = Exit Area ($m^2$)   
$\gamma$ = Ratio of Specific Heats   
$M_e$ = Exit Mach Number   

### Calculate $M_e$

$M_e = {V_e\over{\sqrt{\gamma RT_e}}}$   

where   
$V_e$ = Exit Velocity (m/s)    
$\gamma$ = Ratio of Specific Heats   
$R$ = Gas Constant   
$T_e$ = Exit Temperature

# Constants
### Gravitational Acceleration Constant = 9.8 $m/s^2$

### $\gamma$ (Specific Heat Ratio) = 1.22

### $R$ (Gas Constant of Combustions)
Hydrolox = .705   
Methalox = .424   
RP-1 = .385   

### $\bar{R}$ (Universal Gas Constant) = 8.314

### $M_w$ (Average Molecular Mass of Gas)   
Hydrolox = 11.8    
Methalox = 19.6   
RP-1 = 21.6

### $T_t$ (Combustion Chamber Temperature)
3550 K   
**While this parameter varies slightly based on a number of factors, it always lies between 3500-3600 for any engine or fuel*

### $\pi$ = 3.14159

# Design Parameters

1. Engine Cycle
2. Fuel Type
3. Target Exit Pressure (10-100kPa)
4. Chamber Pressure (kPa)
5. Nozzle Max (exit) Diameter (m)