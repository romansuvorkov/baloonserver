<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBouqetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bouqet', function (Blueprint $table) {
            $table->id();
            $table->string('description');
            $table->unsignedBigInteger('price');
            $table->string('img640');
            $table->string('img1280');
            $table->string('img1980')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bouqet');
    }
}
