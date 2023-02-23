<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TranslationController extends Controller
{
    /**
     * index
     *
     * @param  Request  $request
     */
    public function index(Request $request)
    {
        return view('translation');
    }

    /**
     * translation
     *
     * @param  Request  $request
     */
    public function translation(Request $request)
    {
        // バリデーション
        $request->validate([
            'sentence' => 'required',
        ]);

        // 翻訳を行う文章
        $sentence = $request->input('sentence');

        // 翻訳処理
        // DeepLのAPIを呼ぶ
        $response = Http::get(
            // 無料版URL
            'https://api-free.deepl.com/v2/translate',
            // GETパラメータ
            [
                'auth_key' => config('services.deepl.auth_key'),
                'target_lang' => 'EN-US',
                'text' => $sentence,
            ]
        );

        // 翻訳結果
        $translated_text = $response->json('translations')[0]['text'];

        return view('translation', compact('sentence', 'translated_text'));
    }
}
