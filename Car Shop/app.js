
        function loadCarsFromLocalStorage() {

            let cars = JSON.parse(localStorage.getItem("cars")) || [];

            cars.forEach(createCarInfoDiv);

        }

   
        function saveCarToLocalStorage(car) {

            let cars = JSON.parse(localStorage.getItem("cars")) || [];

            car.id = cars.length;

            cars.push(car);

            localStorage.setItem("cars", JSON.stringify(cars));

        }

   
        function removeCarFromLocalStorage(id) {

            let cars = JSON.parse(localStorage.getItem("cars")) || [];

            let updatedCars = cars.filter(function (car) {

                return car.id !== id;

            });

            localStorage.setItem("cars", JSON.stringify(updatedCars));

        }

   
        function createCarInfoDiv(car) {

            let carInfoDiv = $("<div>").addClass("car-info");
            carInfoDiv.append("<p class='Carname'><strong>Car Name:</strong> " + car.name + "</p>");
            carInfoDiv.append("<p><strong>Car year:</strong> " + car.year + "</p>");
            carInfoDiv.append("<p><strong>Price:</strong> " + car.price + "</p>");
            carInfoDiv.append("<img src='" + car.image + "' alt='" + car.name + "'>");


            let deleteButton = $("<button>")
                .addClass("delete-button")
                .text("Delete")
                .click(function () {

                    carInfoDiv.remove();
                    removeCarFromLocalStorage(car.id);

                });

   

            carInfoDiv.append(deleteButton);
            $("#carsContainer").append(carInfoDiv);

        }

        $(document).ready(function () {

           

            loadCarsFromLocalStorage();

   

         

            $("#openMenu").click(function () {

                $("#menu").toggle(1000);

            });


            $("#carForm").submit(function (e) {

                e.preventDefault();

               

                let car = {

                    name: $("input[name='carName']").val(),
                    year: $("input[name='carYear']").val(),
                    price: $("input[name='carPrice']").val(),
                    image: $("input[name='carImage']").val()

                };

               

                saveCarToLocalStorage(car);


                createCarInfoDiv(car);


                $("#carForm")[0].reset();

            });

        });

        $(document).ready(function(){
            $("#search").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $(".Carname").filter(function() {
                $(this).closest("div").toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });