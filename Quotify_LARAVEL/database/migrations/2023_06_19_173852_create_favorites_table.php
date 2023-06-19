<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorites', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("quote_id")->unsigned()->nullable();
            $table->foreign("quote_id")
            ->references("id")
            ->on('quotes')
            ->onDelete('cascade');
            $table->bigInteger("User_id")->unsigned()->nullable();
            $table->foreign("User_id")
            ->references("id")
            ->on('users')
            ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('favorites');
    }
};
