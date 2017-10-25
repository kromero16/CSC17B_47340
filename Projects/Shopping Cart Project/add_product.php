<!DOCTYPE html>
<html>
<head>
	<title>Add a Product</title>
</head>
<body>
	<h1>Add a Product</h1>
	<form action="add_product.php" method="post">
	<fieldset>
		<legend>Fill out the form to add a product:</legend>
		<p>
			<b>Product Name:</b>
			<input type="text" name="product_name" size="10" maxlength="20" value="<?php if(isset($_POST['product_name'])) echo $_POST['product_name'];?>">
		</p>
		<p>
			<b>Price:</b>
			<input type="text" name="price" size="10" maxlength="20" value="<?php if(isset($_POST['price'])) echo $_POST['price']; ?>">
		</p>
		
</fieldset>
	<div align="center"><input type="submit" name="submit" value="Submit"></div>
</form>
</body>
</html>