<?php

namespace App\Http\Controllers;

use App\Models\Photos;
use Illuminate\Http\Request;
use Validator;
use Image;

class PhotosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $id = auth()->user()->id;
        $photos = Photos::where('user_id', $id)->get();

        return $photos;
    }

    public function allphotos()
    {
        //
        $photos = Photos::where('active', 1)->get();

        return $photos;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(),[
            'title' => 'required|string',
            'description' => 'required|string',
            'photo' => 'required|mimes:jpeg,png,jpg,jpeg,gif',
            'categorie' => 'required',
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors());
        }
        //almacenar img
        $rutaImg = $request['photo']->store('upload-photos', 'public');
        $img = Image::make(public_path("storage/{$rutaImg}"))->fit(600, 500);
        $img->save();

        $photo = Photos::create([
            'title' => $request->title,
            'description' => $request->description,
            'photo_path' => $rutaImg,
            'categorie_id' => $request->categorie,
            'user_id' => auth()->user()->id,
            'active' => 0
        ]);
        return response()->json(['data' => $photo,]);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function show(Photos $photos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function edit(Photos $photos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Photos $photos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Photos  $photos
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Photos $photos)
    {
        $photo = Photos::findOrFail($request['photo'])->delete();
        return response()->json(['response' => $photo]);
    }

    public function active(Request $request){
        
        $photo = Photos::where('id', $request['photo'])->update(array('active' => 1));
        return response()->json(['response' => $photo]);
    }
    public function deactive(Request $request){
        
        $photo = Photos::where('id', $request['photo'])->update(array('active' => 0));
        return response()->json(['response' => $photo]);
    }
}
