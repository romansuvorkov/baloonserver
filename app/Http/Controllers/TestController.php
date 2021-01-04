<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Catalog;
use App\Models\Birthday;
use App\Models\Bouqet;
use App\Models\Business;
use App\Models\Child;
use App\Models\Wedding;


class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  text $model
     * @return \Illuminate\Http\Response
     */
    public function index($model)
    {
        // return Catalog::collection(Birthday::all());
        // return Catalog::collection(Birthday::all());
        if ($model == 'birthday') {
            return Catalog::collection(Birthday::all());
        } elseif ($model == 'child') {
            return Catalog::collection(Child::all());
        } elseif ($model == 'bouqet') {
            return Catalog::collection(Bouqet::all());
        } elseif ($model == 'wedding') {
            return Catalog::collection(Wedding::all());
        } elseif ($model == 'business') {
            return Catalog::collection(Business::all());
        } else {
            return 'Error wrong address';
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @param  text $model
     * @return \Illuminate\Http\Response
     */
    public function lazyLoad($model, $id)
    {
        if ($model == 'birthday') {
            return Catalog::collection(Birthday::all()->where('id', '>', $id)->where('id', '<', $id + 6));
        } elseif ($model == 'child') {
            return Catalog::collection(Child::all()->where('id', '>', $id)->where('id', '<', $id + 6));
        } elseif ($model == 'bouqet') {
            return Catalog::collection(Bouqet::all()->where('id', '>', $id)->where('id', '<', $id + 6));
        } elseif ($model == 'wedding') {
            return Catalog::collection(Wedding::all()->where('id', '>', $id)->where('id', '<', $id + 6));
        } elseif ($model == 'business') {
            return Catalog::collection(Business::all()->where('id', '>', $id)->where('id', '<', $id + 6));
        } else {
            return 'Error wrong address';
        }

        // $response = Catalog::collection($birthday::all()->where('id', '>', $id)->where('id', '<', $id + 6));
        // return $response;
    }

}
