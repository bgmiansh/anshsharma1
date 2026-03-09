class Car {
    String brand;
    String color;
    int speed;

    Car(String b, String c, int s) {
        brand = b;
        color = c;
        speed = s;
    }

    void display() {
        System.out.println("Brand: " + brand);
        System.out.println("Color: " + color);
        System.out.println("Speed: " + speed + " km/h");
        System.out.println("----------");
    }



    public static void main(String[] args) {

        Car c1 = new Car("Toyota", "Red", 120);
        Car c2 = new Car("BMW", "Black", 200);
        Car c3 = new Car("Honda", "White", 150);

        c1.display();
        c2.display();
        c3.display();
    }
}