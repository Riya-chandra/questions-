#include <iostream>
#include <string>

using namespace std;

class Car{
    protected:
     string brand;
     string model;
     int currentspeed;
     bool isEngineOn;
    public:
    Car(string brand, string model){
        this->brand=brand;
        this->model=model;
        this->isEngineOn=false;
        this->currentspeed=0;
    } //constructor of the car class

    void startEngine(){
     isEngineOn=true;
     cout<<brand<<""<<model<<":engine started."<<endl;
    }
    void stopEngine(){
     isEngineOn=false;
     cout<<brand<<""<<model<<":engine stopped."<<endl;
    } //coomon meethods for all cars

    //abstract
    virtual void acceleratee()=0; //abstract for dynamic polymorphism
    virtual void accelerate(int speed)=0; //static
    virtual void brake()=0;
    
};

class ManualCar: public Car{
   private:
   int currGear;
   
   public:
   ManualCar(string brand, string model):Car(brand, model){
    this->currGear=0;
   }//constructor
 
   //specilied gear for manual car
   void shiftGear(int gear){
    currGear=gear;
    cout<<brand<<""<<model<<":shifted to gear"<<currGear<<endl;
   }
    void acceleratee() override{
    if(!isEngineOn){
        cout<<brand<<""<<model<<": cannot accelerate !engine is off."<<endl;
    }
    currentspeed+=20;// because in parent class this is protected hence can be accessed over here in the derived class
    cout<<brand<<" "<<model<<" : accelrating to"<<currentspeed<<"km/h"<<endl;
   }
   //overridding and overloading accelrate at the same time 
    void accelerate(int speed) override{
    if(!isEngineOn){
        cout<<brand<<""<<model<<": cannot accelerate !engine is off."<<endl;
    }
    currentspeed+=speed;// because in parent class this is protected hence can be accessed over here in the derived class
    cout<<brand<<" "<<model<<" : accelrating to"<<currentspeed<<"km/h"<<endl;
   }
   void brake(){
   currentspeed-=20;
   if(currentspeed<0)currentspeed=0;
   cout<<brand<<"" <<model<<": breaking speed is now"<<currentspeed<<"km/hr"<<endl;
   }
};

class ElectricCar: public Car{
    private:
    int batteryLevel;

    public:
    ElectricCar(string brand, string model):Car(brand, model){
    this->batteryLevel=100;
   }//constructor

   //speciliced function of electric car
   void chargeBattery(){
    batteryLevel=100;
    cout<<brand<<" "<<model<<":battery fully charged!"<<endl;
   }
   
   //this accelrate is abstract method in the parent which has diff defination in the manual and the electric car
    void acceleratee() override{
    if(!isEngineOn){
        cout<<brand<<""<<model<<": cannot accelerate !engine is off."<<endl;
    }
    if(batteryLevel<=0){
        cout<<brand<<" "<<model<<" : Battery is dead"<<currentspeed<<endl;
        return;
    }
    batteryLevel-=10;
    currentspeed+=15;// because in parent class this is protected hence can be accessed over here in the derived class
    cout<<brand<<" "<<model<<" : accelrating to"<<currentspeed<<"km/h"<<endl;
   }
    void accelerate(int speed) override{
    if(!isEngineOn){
        cout<<brand<<""<<model<<": cannot accelerate !engine is off."<<endl;
    }
     if(batteryLevel<=0){
        cout<<brand<<" "<<model<<" : Battery is dead"<<currentspeed<<endl;
        return;
    }
    batteryLevel-=10+speed;
    currentspeed+=speed;// because in parent class this is protected hence can be accessed over here in the derived class
    cout<<brand<<" "<<model<<" : accelrating to"<<currentspeed<<"km/h"<<endl;
   }
   void brake(){
   currentspeed-=10;
   if(currentspeed<0)currentspeed=0;
   cout<<brand<<"" <<model<<": breaking speed is now"<<currentspeed<<"km/hr"<<endl;
   }
};

int main(){
    Car* mymanualCar=new ManualCar("Ford","Mustang");
    mymanualCar->startEngine();
    mymanualCar->acceleratee();
    mymanualCar->acceleratee();
    mymanualCar->brake();
    mymanualCar->stopEngine();
    Car* myElectricCar=new ElectricCar("tesla", "model 5"); 
    myElectricCar->startEngine();
    myElectricCar->acceleratee();
    myElectricCar->acceleratee();
    myElectricCar->brake();
    myElectricCar->stopEngine();

    //cleaning
    delete mymanualCar;
    delete myElectricCar;

}