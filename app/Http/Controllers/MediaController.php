<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MediaController extends Controller
{
    public function upload(Request $request)
    {

        $className = 'App\\Models\\' . $request->input('model');
        $model = new $className();
        $model->id = $request->input('model_id', 0);
        $model->exists = true;

        if ($request->has('singleMedia') && $request->boolean('singleMedia', false)) {
            $model->clearMediaCollection($request->input('collection', 'photo'));
        }

        $media = null;

        if ($request->has('file')) {
            $file = $request->input('file');
            if (base64_decode($file)) {
                $extension = explode('/', mime_content_type($file))[1];
                $random = Str::random(40);
                $media = $model->addMediaFromBase64($file)
                    ->usingFileName($random  . '.' . $extension)
                    ->toMediaCollection($request->input('collection', 'photo'));
            } else if ($request->hasFile('file')) {
                $media = $model->addMedia($request->file('file'))
                    ->toMediaCollection($request->input('collection', 'photo'));
            }
        }
        
        if ($media) {
            $media['url'] = $media->getUrl();
            return response()->json($media, 202);
        }
        return response('Upload failed', 402);
    }
}
