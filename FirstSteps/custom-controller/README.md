# Custom products controller

This controller, `ProductsController`, serves as a simple demonstration of defining API endpoints. It simulates basic Create and Read operations for a "Product" resource.

The base route for this controller is defined as `/products`.

## Controller docs

More details [here](https://docs.nestjs.com/controllers)

## Available Endpoints

Here is a summary of the endpoints available in this controller:

| Method | Path            | Description                                  | Usage/Data                                               |
| ------ | --------------- | -------------------------------------------- | -------------------------------------------------------- |
| `GET`  | `/products`     | Retrieves a list of all available products.  | Simple read, returns a hardcoded array of product names. |
| `POST` | `/products`     | Creates a new product.                       | Requires a JSON body containing the new product's name.  |
| `GET`  | `/products/:id` | Retrieves a single product by its unique ID. | The `:id` parameter is extracted from the URL path.      |

## Endpoint Details

### 1. Get All Products

- **Method:** `GET`
- **Route:** `/products`
- **Controller Method:** `findAll()`
- **What it does:** Returns a static array of product names, simulating a database query to list all items.
- **Example Response (Simulated):** [ "Product 1", "Product 2", "Product 3" ]

### 2. Create a Product

- **Method:** `POST`
- **Route:** `/products`
- **Controller Method:** `create(@Body() body)`
- **What it does:** Accepts data from the request body (`@Body()`) and returns a success message confirming the product was "created."
- **Required Request Body (JSON):** { "product": "Laptop Stand Pro" }
- **Example Response:** Product Laptop Stand Pro created successfully!

### 3. Get Product by ID

- **Method:** `GET`
- **Route:** `/products/:id`
- **Controller Method:** `findOne(@Param('id') id)`
- **What it does:** Extracts a dynamic parameter (`id`) from the URL path using `@Param()` and returns a message confirming the ID received.
- **Example Usage:** Request to `GET /products/42`
- **Example Response:** Product with ID: 42
