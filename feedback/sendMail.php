 <?php
      $postdata = file_get_contents("php://input");    
      $request = json_decode($postdata);
      $name = $request->company." ".$request->name;
      $email = $request->email." ".$request->phone;
      $text = $request->text;
      $message = "<table border='1' cellpadding='10px'><tr><td>Имя</td><td>".$name."</td></tr><tr><td>Email</td><td>".$email."</td></tr><tr><td>Сообщение</td><td>".$text."</td></tr></table>";
      $headers = "From: pntrans.info\r\n";
      $headers .= "Content-Type: text/html; charset=utf-8\r\n";
      echo $message;
      $result = mail('office@pntrans.info', 'Сообщение с сайта pntrans.info', $message, $headers);
      $result = mail('kpozdnikin@gmail.com', 'Сообщение с сайта pntrans.info', $message, $headers);
      if($result)
      {
      	echo 'Письмо отправлено';
      }
      else
      {
      	echo 'Ошибка!';
      }
?> 
