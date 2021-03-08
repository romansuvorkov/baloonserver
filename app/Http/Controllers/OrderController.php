<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;
// require 'vendor/autoload.php';
// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';

class OrderController extends Controller
{
    /**
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    
    public function order(Request $request)
    {
        $name = $request->name;
        $phone = $request->phone;
        $messenger = $request->messenger;
        $arr = array(
            'Имя заказчика: ' => $name,
            'Телефон: ' => $phone,
            'Мессенджер: ' => $messenger
        );

        // $message = "Имязаказчикаntktajy";
        // $txt = "tryrty zds fsf < dsf  >sdf ds ,rty";
        // $txt1 = urlencode($txt);
        // $txt1 = mb_convert_encoding($txt, 'ASCII');
        // $txt2 = mb_detect_encoding($txt1);
        // $txt = "Имя заказчика: ".$name.", Телефон: ".$phone.", Email: ".$email;
        // $txt = $name.$phone.$email;
        $txt = "";
        foreach($arr as $key => $value) {
            $txt .= $key.$value."\n";
            // $txt .= "<b>".$key."</b> ".$value."%0A";
        };
        $txt1 = urlencode($txt);
        // return $txt1;
        $token = "1529131917:AAEKpyR6-R_yJESgArdJcxtDQ9ESmk1Iq5M";
        $chat_id = "854476836";
        $test123123 = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}parse_mode=html&text={$txt1}";
        // $test123 = html_entity_decode($test123123);
        $sendToTelegram = fopen($test123123,"r");
        // $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt1}","r");

        if ($sendToTelegram) {
            return 'Заявка принята';
        } else {
            return 'Ошибка';
        }

        // require '../vendor/autoload.php';

        // $mail = new PHPMailer(true);

        // try {
        //     return response(null, 204);
        //     //Server settings
        //     $mail->SMTPDebug = 0;                      // Enable verbose debug output
        //     $mail->isSMTP();                                            // Send using SMTP
        //     $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
        //     $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        //     $mail->Username   = '';                     // SMTP username
        //     $mail->Password   = '';                               // SMTP password
        //     $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        //     $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //     //Recipients
        //     $mail->setFrom($email, 'Тестовый заказ Laravel');
        //     $mail->addAddress('');      // Add a recipient
        //     $mail->addAddress('');    
        //     $mail->isHTML(true);                                  // Set email format to HTML
        //     $mail->Subject = 'Here is the subject';
        //     $mail->Body    = $text;

        //     $mail->send();
        //     return response(null, 204);
        // } catch (Exception $e) {
        //     return $mail->ErrorInfo;
        // }


        // return response(null, 204);
    }
}
