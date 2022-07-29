// UC4 =>  Finding Employee wage For 20 Days

const IS_FULLTIME=1;
const IS_PARTTIME=2;
const FULLTIME_HRS=8;
const PARTTIME_HRS=4;
const WAGE_PER_HR=20;
const IS_ABSENT=0;

function GetEmpHRs()
{
   let emp_hrs=0;
   let empcheck=Math.floor(Math.random()*3);
    
   switch(empcheck)
    {
        case IS_FULLTIME:
                          emp_hrs=FULLTIME_HRS;
                          return emp_hrs;
                          break;
        case IS_PARTTIME:
                          emp_hrs=PARTTIME_HRS;
                          return emp_hrs;
                          break;
        case IS_ABSENT:
                       // console.log(">> Employee is Absent!!");
                        return emp_hrs;
                        break;
    }
}

let emp_total_hr=0;
for(i=1;i<=20;i++)
{
   emp_total_hr +=GetEmpHRs();
}

console.log(">> Total Hrs Employee Worked For in 20 Days = ",emp_total_hr+"\n>> Employee Wage For 20 Days = ",emp_total_hr*WAGE_PER_HR);

