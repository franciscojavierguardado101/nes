<?php

namespace App\Http\Controllers;

use App\Post;
use App\Rules\SocialLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class PostController extends Controller {
    //PostController constructor.

    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        $user = Auth::user();
        $post = $user->posts;
        return $post; //view all posts of the user
    }

    public function store(Request $request) {
        $this->validate($request, array(
            'title' => 'required|max:25',
            'image' => 'required|url',
            'socialLink' => [new SocialLink]
        ));
        $post = new Post();
        $post->title = $request->get('title');
        $post->description = $request->get('description') ?? NULL;
        $post->user_id = auth()->user()->id;
        $post->image = $request->get('image');
        $post->socialMedia = $request->get('socialLink') ?? NULL;
        $post->save();

        return $post;
    }

    public function show($id) {
        $posts = Post::findOrFail($id);
        return view('posts.show', ['post' => $posts]);
    }


}
