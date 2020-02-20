const express = require("express");

const mikud = require("./middleware/mikud");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) => res.send("Home Page"));

app.get("/:city/:street/?:houseNumber/?:entrance", (req, res) => {
  let address = {
    city: req.params.city,
    street: req.params.street,
    houseNumber: req.params.houseNumber || 1,
    entrance: req.params.entrance || 1
  };
  console.log(address);
  mikud(
    {
      city: address.city,
      street: address.street,
      houseNumber: parseInt(address.houseNumber),
      entrance: parseInt(address.entrance)
    },
    (err, zipcode) => {
      if (err) {
        res.send("Error");
      } else {
        res.send(zipcode);
      }
    }
  );
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
