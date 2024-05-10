CREATE TABLE productdetails (
  product_id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255) NOT NULL,
  productsSize TEXT NOT NULL,
  content TEXT NOT NULL,
  keyboard VARCHAR(255) NOT NULL,
  trackpad VARCHAR(255) NOT NULL,
  adaptor VARCHAR(255) NOT NULL,
  price VARCHAR(45) NOT NULL,
  discountPrice VARCHAR(45) NOT NULL,
  PRIMARY KEY (product_id));

INSERT INTO productDetails (productName, productSize, content, keyboard, trackpad, adaptor, price, discountPrice)
VALUES ("8-core CPU
10-core GPU
8GB Unified Memory
512GB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Touch ID", "Force Touch trackpad", "70W USB-C Power Adapter", "7,499.00", "312.46");

INSERT INTO productDetails (productName, productSize, content, keyboard, trackpad, adaptor, price, discountPrice)
VALUES ("8-core CPU
10-core GPU
8GB Unified Memory
1TB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Touch ID", "Force Touch trackpad", "70W USB-C Power Adapter", "8,299.00", "345.79");

INSERT INTO productDetails (productName, productSize, content, keyboard, trackpad, adaptor, price, discountPrice)
VALUES ("8-core CPU
10-core GPU
16GB Unified Memory
1TB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Touch ID", "Force Touch trackpad", "70W USB-C Power Adapter", "9,099.00", "379.13");

INSERT INTO productDetails (productName, productSize, content, keyboard, trackpad, adaptor, price, discountPrice)
VALUES ("11-core CPU
14-core GPU
18GB Unified Memory
512GB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Touch ID", "Force Touch trackpad", "70W USB-C Power Adapter", "9,999.00", "416.63");

INSERT INTO productDetails (productName, productSize, content, keyboard, trackpad, adaptor, price, discountPrice)
VALUES ("12-core CPU
18-core GPU
18GB Unified Memory
1TB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Touch ID", "Force Touch trackpad", "96W USB-C Power Adapter", "11,599.00", "483.29");

INSERT INTO productDetails (productName, productSize, content, keyboard, trackpad, adaptor, price, discountPrice)
VALUES ("14-core CPU
30-core GPU
36GB Unified Memory
1TB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Touch ID", "Force Touch trackpad", "96W USB-C Power Adapter", "14,799.00", "616.63");

INSERT INTO productDetails (model)
VALUES ("11-core CPU
14-core GPU
18GB Unified Memory
512GB SSD Storage¹", "14-inch Liquid Retina XDR display²", "Two Thunderbolt / USB 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port", 
"Magic Keyboard with Toproductdetailsuch ID", "Force Touch trackpad", "70W USB-C Power Adapter", "9,999.00", "416.63");

SELECT * FROM apple.productdetails;