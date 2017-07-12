/**
 * Created by peter joseph on 7/6/2017.
 */


/***************javascriptobject*****************/


function employee(name,skills,salary){

    this.name = name;
    this.skills = skills;
    this.salary = salary;

    /***************object method******************/

    this.printDetails=function(name,skills,salary){
        document.getElementById('div1').innerHTML="Employee name is" + " " + "<b>"  + this.name + "</b>" + "." + " " + "Skills" + " " + "<b>" + this.skills + "</b>"  + "," + " " +
            "basic salary is :" + " " + "Rs" + " " + this.salary;
    }

    /***************object method******************/

    this.changeSalry=function(salary){

        this.salary=salary;

    }
}

/***************object instance******************/

var data = new employee("peter","java",48000);

data.changeSalry(50000);

data.printDetails();
