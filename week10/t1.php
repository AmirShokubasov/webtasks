<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		.main{
			border:2px solid black;
			border-radius: 20px;
			width: 300px;
			height: 70px;
		}
		.top{
			margin-left: 20px;
			float: left;
		}
		.top2{
			margin-left: 190px;
			margin-top: -40px;
			float: right;
		}
		.top5{
			float: left;
			border:2px solid black;
			border-radius: 50px;
			background-color: black;
			color: white;
			margin-left: 32px;
			margin-top: -20px;
					}
		.top4{
			float: right;
			margin-top:-20px;
			margin-right: 50px;
			text-decoration-line: underline; 
		}
	</style>
</head>
<body>
<div class="main">
<?php
$model= $_GET["model"];
$cost= $_GET["cost"];
$type=$_GET["Type"];
$year=$_GET["year"];
$att=$_GET["att"];
print "
<div class=\"top\"><h4> ".$model."</h4><div class=\"top2\">".$cost." </div></div><br/>
<div class=\"top3\"><div class=\"top5\">".$year."</div><div class=\"top4\">".$type." </div></div><br/>
";
foreach ($att as $value) {
	# code...
	echo  $value;
}
?>


</div>
</body>
</html>