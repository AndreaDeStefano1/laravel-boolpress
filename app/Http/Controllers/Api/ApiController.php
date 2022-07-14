<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index(){
        $posts = Post::with('tags')->paginate(5);

        // return response()->json($posts);
        return response()->json(compact('posts'));
    }
}
