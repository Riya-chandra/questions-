//deep copy m the change would not affect the thing...like j copy bnta hai 
//wo bnta usssi pointer location p hai pr alg space m inside heap bnta hai 
//but in shallow copy pura ka pura copy hota hai uth kr ki ek m change dono jgh k data ko change kr dega 
// Shallow 👉 Address copy hoti hai, data copy nahi hota.
// 👉 Dono objects same memory location ko point karte hain.
//deep copy Data heap me new memory banake copy hota hai.
// 👉 Pointers alag location ko point karte hain.

#include <iostream>
#include <cstring>
using namespace std;

class Demo {
public:
    char *name;

    Demo(const char* n) {
        name = new char[strlen(n)+1];
        strcpy(name, n);
    }

    Demo(const Demo &d) {  // Deep copy
        name = new char[strlen(d.name)+1];
        strcpy(name, d.name);
    }

    ~Demo() {
        delete[] name;
    }
};

int main() {
    Demo d1("Riya");
    Demo d2 = d1;
}
