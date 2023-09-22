<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Personaje;

class PersonajeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $personajes = Personaje::all();
    return $personajes;
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $personaje = new Personaje();
        $personaje->name = $request->name;
        $personaje->status = $request->status;
        $personaje->species = $request->species;
        $personaje->gender = $request->gender;
        $personaje->url = $request->url;
        $personaje->save();
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $personaje = Personaje::find($id);
        return $personaje;
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $personaje = Personaje::findOrFail($request->id);
        $personaje->name = $request->name;
        $personaje->status = $request->status;
        $personaje->species = $request->species;
        $personaje->gender = $request->gender;
        $personaje->url = $request->url;
        $personaje->save();
        return $personaje;
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $personaje = Personaje::destroy($id);
        return $personaje;
        //
    }
}
