<?php

########### CONFIG ###############

$recipient = 'altan.bnm@gmail.com';
$redirect = 'https://buenyamin-altan.developerakademie.com/my-portfolio/index.html';

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'] ."<" . $_POST['email'] . ">";
        $headers = "From:  noreply@developerakademie.com"; // noreply@developerakademie.com / not sure  

        mail($recipient, $subject, $_POST['message'], $headers);
        // mail($recipient, $subject, $_POST['email'], $headers);// Delete if its not work
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
