<?php

namespace App\Http\Traits;

use App\Models\Message;

trait SMSHandler
{
    public function sendCode($mobile_number, $code = null)
    {
        if (config('app.debug')) {
            $message = Message::create([
                'message_id' => 1,
                'recipient' => $mobile_number,
                'code' => '123456',
                'data' => 'test'
            ]);
        } else {
            $ch = curl_init();

            $parameters = array(
                'code' => $code,
                'apikey' => config('app.semaphone_key'), //Your API KEY
                'number' => $mobile_number,
                'message' => 'Your OTP code is now {otp}. Please use it quickly!',
                'sendername' => config('app.semaphone_sendername')
            );
            curl_setopt($ch, CURLOPT_URL, 'https://api.semaphore.co/api/v4/otp');
            curl_setopt($ch, CURLOPT_POST, 1);
            //Send the parameters set above with the request
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($parameters));

            // Receive response from server
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $output = curl_exec($ch);
            curl_close($ch);

            $messageData = json_decode($output, true);
            $message = null;
            foreach ($messageData as $message) {
                if (isset($message['code'])) {
                    $message = Message::create([
                        'message_id' => $message['message_id'],
                        'recipient' => $message['recipient'],
                        'code' => $message['code'],
                        'data' => $message
                    ]);
                }
            }
            return $message;
        }
    }

    public function sendPriorityMessage($mobile_number, $message)
    {
        $ch = curl_init();
        $parameters = array(
            'apikey' => config('app.semaphone_key'), //Your API KEY
            'number' => $mobile_number,
            'message' => $message,
            'sendername' => config('app.semaphone_sendername')
        );
        curl_setopt($ch, CURLOPT_URL, 'https://api.semaphore.co/api/v4/priority');
        curl_setopt($ch, CURLOPT_POST, 1);
        //Send the parameters set above with the request
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($parameters));

        // Receive response from server
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);


        $messageData = json_decode($output, true);
        $message = null;
        foreach ($messageData as $message) {
            $message = Message::create([
                'message_id' => $message['message_id'],
                'recipient' => $message['recipient'],
                'code' => null,
                'data' => $message
            ]);
        }
        return $message;
    }
}
