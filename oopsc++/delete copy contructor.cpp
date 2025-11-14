#include <iostream>
using namespace std;

class ExampleDes {
private:
    int age = 0;

public:
    ExampleDes() {}
    ExampleDes(const ExampleDes&)=delete;  //points to the real memeory of teh constructor
};

int main() {
    ExampleDes l1;
    //yaha v print hoga and ek baar by default jb destrivtor call hota h toh wo v print hoga 
}
