<?php
	
	$head = "<ul>
				<li>link1</li>
				<li>link2</li>
				<li>link3</li>
				<li>link4</li>
			</ul>";
	$foot = "<span>底部</span>";
	
	$c = '[{"name":"adin"},{"name":"liyang"}]';
	
	
	$type = @$_GET["type"];
	
//	if($type == "header"){
//		echo $head;
//	}else if($type == "footer"){
//		echo $foot;
//	}else{
//		echo "没有数据";
//	}
	
	echo $c;
?>