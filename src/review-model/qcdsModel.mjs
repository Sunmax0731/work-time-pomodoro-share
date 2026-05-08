const order=['D-','D+','C-','C+','B-','B+','A-','A+','S-','S+'];
export function isAtLeastAMinus(g){return order.indexOf(g)>=order.indexOf('A-');}
export function enforceManualTestCap(metrics){const grades=Object.values(metrics.grades??{}); if(metrics.manualTestStatus==='not-run'&&grades.includes('S+')) throw new Error('S+ is not allowed while manual tests are not run'); const below=Object.entries(metrics.grades??{}).filter(([,g])=>!isAtLeastAMinus(g)); if(below.length) throw new Error('QCDS below A-: '+JSON.stringify(below)); return true;}
