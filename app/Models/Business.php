<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'description',
        'price',
        'img640',
        'img1280',
        'img1980'
    ];

    protected $table = 'business';
}
