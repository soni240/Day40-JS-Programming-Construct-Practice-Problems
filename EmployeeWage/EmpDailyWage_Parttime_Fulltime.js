// UC2 => Calculate Daily wage for Parttime or fulltime Employee 
// UC 3=> Return EMployee worked Hrs

const IS_FULLTIME=1;
const IS_PARTTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;
const IS_ABSENT=0;

let emp_hrs=0;
let empcheck=Math.floor(Math.random()*3);

switch(empcheck)
{
    case IS_FULLTIME:
                      emp_hrs=FULLTIME_HRS;
                      break;
    case IS_PARTTIME:
                      emp_hrs=PARTTIME_HRS;
                      break;
    case IS_ABSENT:
                    console.log(">> Employee is Absent!!");
                    return;
                    break;
}

let empwage=emp_hrs*WAGE_PER_HR;
console.log(">> Total HRs Employee Worked = ",emp_hrs+"\n>> Employee Daily Wage = ",empwage);

