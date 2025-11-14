class Person:
    pass

p1=Person()
p1.name="email"
p1.age=12

print(p1.name)
print(p1.age)

# With __init__(), you can set initial values when creating the object:


#default values in __init__ obj

class Person:
  def __init__(self, name, age=18):
    self.name = name
    self.age = age

p1 = Person("Emil")
p2 = Person("Tobias", 25)

print(p1.name, p1.age)
print(p2.name, p2.age)


class Person:
    def __init__(self,name,age,city,country):
        self.name=name
        self.age=age
        self.city=city
        self.country=country
        
p1.Person("Linus",13,"patna","India")

print(p1.name)
print(p1.age)
print(p1.city)
print(p1.country)        