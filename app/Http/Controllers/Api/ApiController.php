<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use App\Tag;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index(){
        $posts = Post::with('tags')->paginate(5);
        $tags = Tag::all();
        // return response()->json($posts);
        return response()->json(compact('posts','tags'));
    }

    public function show($slug){
        $post = Post::where('slug', $slug)->with('tags')->first();

        return response()->json($post);
    }

    public function postsByTag($slug){
        $posts = Tag::where('slug',$slug)->with('posts')->first();

        return response()->json(compact('posts'));
    }
}
