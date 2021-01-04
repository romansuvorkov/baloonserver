<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bouqet extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'description',
        'price',
        'img'
    ];

    protected $table = 'birthday';
}
