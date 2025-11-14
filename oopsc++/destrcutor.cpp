#include <iostream>
using namespace std;

class ExampleDes {
private:
    int age = 0;

public:
    ExampleDes(int age) {  // constructor is public now
        this->age = age;
    }

    void print() {
        cout << age;
    }
    ~ExampleDes(){
        cout<<"i m the distructor"<<endl;
    }
};

int main() {
    ExampleDes e(34);  // pass value to constructor
    e.print();         // prints 34
    e.~ExampleDes(); //yaha v print hoga and ek baar by default jb destrivtor call hota h toh wo v print hoga 
}
