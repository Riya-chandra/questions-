#include <iostream>
using namespace std;

class Animal{
    public:
    virtual void sound(){
        cout<<"animal sound"; //abstract class
    }
};

class Dog: public Animal{
    public:
    void sound(){
        cout<<"dog barks"<<endl;
    }
};

class cat: public Animal{
    public:
    void sound(){
        cout<<"cats mews"<<endl;
    }
};

int main(){
    Animal *a=new Dog();//in abstract class object nhi bnta hai abstract class ka 
    a->sound();
    Animal *b=new cat();
    b->sound();
}