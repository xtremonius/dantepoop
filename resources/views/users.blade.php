<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Users') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                {{-- <x-jet-welcome /> --}}
                <h1>Listado usuarios</h1>
                <ol>
                    @foreach ($users as $user)
                        <li>{{ $user->name }}</li>
                    
                    @endforeach
                </ol>
        
            </div>
        </div>
    </div>
</x-app-layout>
