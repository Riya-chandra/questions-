#include <iostream>
using namespace std;

//inheritance meaning driving the property from one class to another

class Scanner{
    public:
    void scan(){
        cout<<"i m the scanner machine needs me to scan !"<<endl;
    }
};

class Printer{
  public:
  void print(){
        cout<<"i m the printer machine needs me to print !"<<endl;
  }
};

class Machine: public Scanner, public Printer{}; //inherit

int main(){
    Machine m;
    m.scan();
    m.print();
}