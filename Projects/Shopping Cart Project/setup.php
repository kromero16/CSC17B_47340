<?php
	require_once 'functions.php';
/*
	createTable('testing','id INT UNSIGNED NOT NULL AUTO_INCREMENT,
		field VARCHAR(255) DEFAULT NULL,
		PRIMARY KEY(id)');
*/
	createTable('products','
					product_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
					product_name VARCHAR(60) NOT NULL,
					price DECIMAL(6,2) UNSIGNED NOT NULL,
					description VARCHAR(255) DEFAULT NULL,
					PRIMARY KEY(product_id),
					INDEX(product_name),
					INDEX(price)');

	createTable('orders','
					order_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
					customer_id INT UNSIGNED NOT NULL,
					total DECIMAL(10,2) UNSIGNED NOT NULL,
					order_date TIMESTAMP,
					PRIMARY KEY (order_id),
					INDEX(customer_id),
					INDEX(order_date)');

	createTable('order_contents','
					oc_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
					order_id INT UNSIGNED NOT NULL,
					product_id INT UNSIGNED NOT NULL,
					quantity TINYINT UNSIGNED NOT NULL DEFAULT 1,
					price DECIMAL(6,2) UNSIGNED NOT NULL,
					ship_date DATETIME DEFAULT NULL,
					PRIMARY KEY(oc_id),
					INDEX(order_id),
					INDEX(product_id),
					INDEX(ship_date)');

	createTable('customers','
					customer_id INT UNSIGNED NOT NULL
						AUTO_INCREMENT,
					email VARCHAR(60) NOT NULL,
					pass CHAR(40) NOT NULL,
					PRIMARY KEY (customer_id),
					UNIQUE (email), INDEX login (email,pass)');




?>