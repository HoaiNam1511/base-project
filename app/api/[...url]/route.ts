import serverConfig from "@/config/server";
import { NextResponse } from "next/server";
import { bodyConfig as buildBodyConfig } from "../../utils/index";

export async function GET(request: Request) {
    //Get path name and search params
    const { pathname, search } = new URL(request.url);

    const res = await fetch(`${serverConfig.api.url}${pathname}${search}`);

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}

export async function POST(request: Request) {
    const { pathname, search } = new URL(request.url);

    const bodyConfig = await buildBodyConfig(request);

    const res = await fetch(`${serverConfig.api.url}${pathname}${search}`, {
        method: "POST",
        ...bodyConfig,
    });

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}

export async function PUT(request: Request) {
    const { pathname, search } = new URL(request.url);

    const bodyConfig = await buildBodyConfig(request);

    const res = await fetch(`${serverConfig.api.url}${pathname}${search}`, {
        method: "PUT",
        ...bodyConfig,
    });

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}

export async function DELETE(request: Request) {
    const { pathname, search } = new URL(request.url);

    const bodyConfig = await buildBodyConfig(request);

    const res = await fetch(`${serverConfig.api.url}${pathname}${search}`, {
        method: "DELETE",
        ...bodyConfig,
    });

    return NextResponse.json(await res.json(), {
        status: res.status,
        statusText: res.statusText,
    });
}
