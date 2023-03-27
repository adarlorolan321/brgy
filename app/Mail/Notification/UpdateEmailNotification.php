<?php

namespace App\Mail\Notification;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class UpdateEmailNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    }


    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Update Email Notification',
        );
    }


    public function content(): Content
    {
        return new Content(
            markdown: 'mail.notification.update-email-notification',
        );
    }


    public function attachments(): array
    {
        return [];
    }
}
