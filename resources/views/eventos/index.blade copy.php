@extends('layouts.layoutprueba')

@section('title', 'Titulo primero')

@section('scripts')
    <link href='https://cdn.jsdelivr.net/npm/fullcalendar@5.3.2/main.min.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.3.2/main.min.js'></script>
@endsection

@section('sidebar')
    <p>This is appended to the master siderbar.</p>


@endsection


@section('content')
    <p>This is my body content.</p>
    
@endsection