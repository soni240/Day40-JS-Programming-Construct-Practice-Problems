// UC5 => FInd Employee Wage For Max 20 Day till Max hrs condition meets

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

const MAX_HRS_INMONTH=100;
const MAX_WORKING_DAYS_INMONTH=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_INMONTH && totalWorkingDays<=MAX_WORKING_DAYS_INMONTH)
{
    totalWorkingDays++;
    tempEmpHrs=GetEmpHRs();
    totalEmpHrs+=tempEmpHrs;
    if(totalEmpHrs>100)
    {
        totalEmpHrs-=tempEmpHrs
        break;
    }
}

let empwage=totalEmpHrs*WAGE_PER_HR;
console.log(">> Total Working Hrs of Employee in 20 days = ",totalEmpHrs+"\n>> Total Employee wage of Employee for 20 days = ",empwage);

