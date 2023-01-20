<html>

<head>
    <meta charset='utf-8' />
</head>

<body>
    {{-- フォーム --}}
    <form method="POST">
        @csrf
        <textarea rows="10" cols="50" name="sentence">{{ isset($sentence) ? $sentence : '' }}</textarea>
        <button type="submit">翻訳</button>
    </form>

    {{-- 翻訳結果 --}}
    {{ isset($translated_text) ? $translated_text : '' }}
</body>

</html>

